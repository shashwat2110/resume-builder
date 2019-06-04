<template>
	<div class="editor">
		<h2> {{ fieldName }} </h2>
		<editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
			<div class="menubar">
				<div class="toolbar">
					<button
						class="menubar__button"
						@click="commands.undo"
					>
					<font-awesome-icon icon="undo"></font-awesome-icon>
					</button>

					<button
						class="menubar__button"
						@click="commands.redo"
					>
					<font-awesome-icon icon="redo"></font-awesome-icon>
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.bold() }"
						@click="commands.bold"
					>
					<font-awesome-icon icon="bold"></font-awesome-icon>
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.italic() }"
						@click="commands.italic"
					>
					<font-awesome-icon icon="italic"></font-awesome-icon>
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.strike() }"
						@click="commands.strike"
					>
					<font-awesome-icon icon="strikethrough"></font-awesome-icon>
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.underline() }"
						@click="commands.underline"
					>
					<font-awesome-icon icon="underline"></font-awesome-icon>
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.code() }"
						@click="commands.code"
					>
					<font-awesome-icon icon="code"></font-awesome-icon>
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.paragraph() }"
						@click="commands.paragraph"
					>
					<font-awesome-icon icon="paragraph"></font-awesome-icon>
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.heading({ level: 1 }) }"
						@click="commands.heading({ level: 1 })"
					>
						H1
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.heading({ level: 2 }) }"
						@click="commands.heading({ level: 2 })"
					>
						H2
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.heading({ level: 3 }) }"
						@click="commands.heading({ level: 3 })"
					>
						H3
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.bullet_list() }"
						@click="commands.bullet_list"
					>
						Bullet List
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.ordered_list() }"
						@click="commands.ordered_list"
					>
						Ordered List
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.blockquote() }"
						@click="commands.blockquote"
					>
						Blockquote
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.code_block() }"
						@click="commands.code_block"
					>
						Codeblock
					</button>

					<button
						class="menubar__button"
						@click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
					>
						<font-awesome-icon icon="table"></font-awesome-icon>
					</button>

					<span v-if="isActive.table()">
						<button
							class="menubar__button"
							@click="commands.deleteTable"
						>
							Remove Table
						</button>
						<button
							class="menubar__button"
							@click="commands.addColumnBefore"
						>
						Add Column
						</button>
							
						<button
							class="menubar__button"
							@click="commands.addColumnAfter"
						>
						Add Column After
						</button>
						<button
							class="menubar__button"
							@click="commands.deleteColumn"
						>
							Delete Column
						</button>
						<button
							class="menubar__button"
							@click="commands.addRowBefore"
						>
							Add Row Before
						</button>
						<button
							class="menubar__button"
							@click="commands.addRowAfter"
						>
							Add Row After
						</button>
						<button
							class="menubar__button"
							@click="commands.deleteRow"
						>
							Delete Row
						</button>
						<button
							class="menubar__button"
							@click="commands.toggleCellMerge"
						>
							Cell Merge
						</button>
					</span>
				</div>
			</div>
		</editor-menu-bar>

		<editor-content class="editor__content" :editor="editor" />
	</div>
</template>

<script>
	import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
	import {
		Blockquote,
		CodeBlock,
		HardBreak,
		Heading,
		OrderedList,
		BulletList,
		ListItem,
		TodoItem,
		TodoList,
		Bold,
		Code,
		Italic,
		Link,
		Table,
		TableHeader,
		TableCell,
		TableRow,
		Strike,
		Underline,
		History,
	} from 'tiptap-extensions'

export default {
	name: 'RichTextEditor',
	components: {
		EditorContent,
		EditorMenuBar,
	},
	props: {
		fieldName: String,
		fieldId: String
	},
	data: function ()  {
		return {
			editor: new Editor({
				extensions: [
					new Blockquote(),
					new BulletList(),
					new CodeBlock(),
					new HardBreak(),
					new Heading({ levels: [1, 2, 3] }),
					new ListItem(),
					new OrderedList(),
					new TodoItem(),
					new TodoList(),
					new Link(),
					new Bold(),
					new Code(),
					new Italic(),
					new Strike(),
					new Underline(),
					new History(),
					new Table({
						resizable: true,
					}),
					new TableHeader(),
					new TableCell(),
					new TableRow(),
				],
				content: this.$cookie.get(this.fielId),
				onUpdate: ({ getHTML }) => {
					this.html = getHTML()
					this.$emit('contentChanged', this.fieldName, this.fieldId, this.html)
					this.$cookie.set(this.fieldId, this.html, { expires: 7 });
				},
			}),
			html : '',
		}
	},
	
	beforeDestroy() {
		this.editor.destroy()
	},
}
</script>

<style scoped lang="scss">
.editor {
  position: relative;
  max-width: 50rem;
  max-height: 20rem;
  margin: 0 auto 5rem auto;

  &__content {

    word-wrap: break-word;
	border-radius: 5px;
	min-height: 10rem;
	background-color: darkkhaki;

    * {
      caret-color: currentColor;
    }

    pre {
      padding: 0.7rem 1rem;
      border-radius: 5px;
      background: black;
      color: white;
      font-size: 0.8rem;
      overflow-x: auto;

      code {
        display: block;
      }
    }

    p code {
      display: inline-block;
      padding: 0 0.4rem;
      border-radius: 5px;
      font-size: 0.8rem;
      font-weight: bold;
      background: rgba(black, 0.1);
      color: rgba(black, 0.8);
    }

    ul,
    ol {
      padding-left: 1rem;
    }

    li > p,
    li > ol,
    li > ul {
      margin: 0;
    }

    a {
      color: inherit;
    }

    blockquote {
      border-left: 3px solid rgba(black, 0.1);
      color: rgba(black, 0.8);
      padding-left: 0.8rem;
      font-style: italic;

      p {
        margin: 0;
      }
    }

    img {
      max-width: 100%;
      border-radius: 3px;
    }

    table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      margin: 0;
      overflow: hidden;

      td, th {
        min-width: 1em;
        border: 2px solid;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
        > * {
          margin-bottom: 0;
        }
      }

      th {
        font-weight: bold;
        text-align: left;
      }

      .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: "";
        left: 0; right: 0; top: 0; bottom: 0;
        background: rgba(200, 200, 255, 0.4);
        pointer-events: none;
      }

      .column-resize-handle {
        position: absolute;
        right: -2px; top: 0; bottom: 0;
        width: 4px;
        z-index: 20;
        background-color: #adf;
        pointer-events: none;
      }
    }

    .tableWrapper {
      margin: 1em 0;
      overflow-x: auto;
    }

    .resize-cursor {
      cursor: ew-resize;
      cursor: col-resize;
    }

  }
}

.menubar {

  margin-bottom: 1rem;
  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
  }

  &.is-focused {
    visibility: visible;
    opacity: 1;
    transition: visibility 0.2s, opacity 0.2s;
  }

  &__button {
    font-weight: bold;
    display: inline-flex;
    background: transparent;
    border: 0;
    color: black;
    padding: 0.2rem 0.5rem;
    margin-right: 0.2rem;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: rgba(black, 0.05);
    }

    &.is-active {
      background-color: rgba(black, 0.1);
    }
  }
}


</style>
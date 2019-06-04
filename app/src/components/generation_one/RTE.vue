<template>
  <div class="editor">
    <editor-floating-menu :editor="editor" v-slot="{ commands, isActive, menu }">
      <div
        class="editor__floating-menu"
        :class="{ 'is-active': menu.isActive }"
        :style="`top: ${menu.top}px`"
      >

      <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <v-icon> format_bold </v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <v-icon> format_italic </v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <v-icon> format_underlined </v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
         <v-icon>format_list_bulleted</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <v-icon >format_list_numbered</v-icon>
        </button>


        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
        <v-icon >code</v-icon>
        </button>

      </div>
    </editor-floating-menu>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorFloatingMenu } from 'tiptap'
import {
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Underline,
  Link,
  History,
} from 'tiptap-extensions'
export default {
  name: 'RTE',
  components: {
    EditorContent,
    EditorFloatingMenu,
  },
  data() {
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
          new Underline(),
          new History(),
        ],
        content: ``,
        onUpdate: ({ getHTML }) => {
          this.html = getHTML()
          this.$emit('contentChangedRTF', this.html)
          // this.$cookie.set(this.fieldId, this.html, { expires: 7 });
        },
      }),
      html: ''
    }
  },
}
</script>

<style scoped lang="scss">
.editor {
  border-color: black;
  position: relative;
  &__floating-menu {
    position: absolute;
    margin-top: -0.25rem;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
    &.is-active {
      opacity: 1;
      visibility: visible;
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
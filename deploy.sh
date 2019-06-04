#!/bin/bash
rm -rf deployment/public/app/*
# rm -rf deployment/public/resume_builder/*

cp -r app/dist/* deployment/public/app/
# cp -r resume_builder/* deployment/public/resume_builder

cd deployment/
# firebase deploy --only hosting:resume_builde
firebase deploy --only hosting:app

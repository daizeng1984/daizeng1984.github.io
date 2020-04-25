@echo off
for %%c in (*.png) do ebb %%c
for %%c in (*.jpg) do ebb %%c 
for %%c in (*.png) do rename %%c.png
for %%c in (*.jpg) do rename %%c.jpg

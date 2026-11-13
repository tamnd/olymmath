---
tag: 60JFR2KT0C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h3244432
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2023
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2024
    source: hf-ai-mo-aops
    label: 2024 Olympic Revenge
---
Régis, Ed and Rafael are at the IMO. They are going to play a game in Bath, and there are $2^n$ houses in the city. Régis and Ed will team up against Rafael. The game operates as follows: First, Régis and Ed think on a strategy and then let Rafael know it. After this, Régis and Ed no longer communicate, and the game begins. Rafael decides on an order to visit the houses and then starts taking Régis to them in that order. At each house, except for the last one, Régis choose a number between $1$ and $n$ and places it in the house. In the last house, Rafael chooses a number from $1$ to $n$ and places it there.

Afterwards, Ed sees all the houses and the numbers in them, and he must guess in which house Rafael placed the number. Ed is allowed $k$ guesses. What is the smallest $k$ for which there exists a strategy for Ed and Régis to ensure that Ed correctly guess the house where Rafael placed the number?

---
tag: DT54JS9S2H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2986379
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2017
    source: hf-ai-mo-aops
    label: 2017 Switzerland - Final Round
---
The main building of ETH Zurich is a rectangle divided into unit squares. Every side of a square is a wall, with certain walls having doors. The outer wall of the main building has no doors. A number of participants of the SMO have gathered in the main building lost. You can only move from one square to another through doors. We have indicates that there is a walkable path between every two squares of the main building.
Cyril wants the participants to find each other again by having everyone on the same square leads. To do this, he can give them the following instructions via walkie-talkie: North, East, South or West. After each instruction, each participant simultaneously attempts a square in that direction to go. If there is no door in the corresponding wall, he remains standing.
Show that Cyril can reach his goal after a finite number of directions, no matter which one square the participants at the beginning.

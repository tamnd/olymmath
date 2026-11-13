---
tag: 3FYQJXE386
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231848
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Metadieu, Tercieu and Quartieu are three bodybuilder warriors who fight against an $n$-headed monster. Each of them can attack the monster according to the following rules:

(1) Metadieu's attack consists of cutting off half of the monster's heads, then cutting off one more head. If the monster's number of heads is odd, Metadieu cannot attack;

(2) Tercieu's attack consists of cutting off a third of the monster's heads, then cutting off two more heads. If the monster's number of heads is not a multiple of 3, Tercieu cannot attack;

(3) Quartieu's attack consists of cutting off a quarter of the monster's heads, then cutting off three more heads. If the monster's number of heads is not a multiple of 4, Quartieu cannot attack;

If none of the three warriors can attack the monster at some point, then it will devour our three heroes. The objective of the three warriors is to defeat the monster, and for that they need to cut off all its heads, one warrior attacking at a time.

For what positive integer values of $n$ is it possible for the three warriors to combine a sequence of attacks in order to defeat the monster?

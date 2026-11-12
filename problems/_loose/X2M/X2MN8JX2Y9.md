---
tag: X2MN8JX2Y9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12989
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cube $100 \times 100 \times 100$ is divided into a million unit cubes; each cube contains a light bulb. Three faces of the large cube, sharing a common vertex, are painted: one red, one blue, and one green. We will call a column a set of 100 cubes forming a $1 \times 1 \times 100$ block. Each of the 30000 columns has one painted end cell; in this cell, there is a switch - pressing this switch changes the state of all 100 light bulbs in the column (a turned-off bulb turns on, and a turned-on bulb turns off). Initially, all light bulbs were off. Petya pressed several switches, resulting in a situation where exactly $k$ light bulbs are on. Prove that after this, Vasya can press several switches so that no light bulbs are on, using no more than $k / 100$ switches on the red face.

(S. Kudrya, I. Bogdanov)

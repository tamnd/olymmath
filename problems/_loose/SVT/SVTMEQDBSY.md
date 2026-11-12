---
tag: SVTMEQDBSY
kind: problem
type: answer
answer: \frac{2^{100}}{C_{100}^{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In front of Alyosha are 100 closed boxes, each containing either a red or a blue cube. Alyosha has one ruble on his account. He approaches any closed box, announces the color, and places any amount (it can be a non-integer number of kopecks, but not more than he has on his account at that moment). The box is opened, and Alyosha's account increases or decreases by the placed amount depending on whether the color was guessed correctly or not. The game continues until all the boxes are opened. What is the maximum amount Alyosha can guarantee on his account if he knows that

a) there is only one blue cube;

b) there are exactly $n$ blue cubes.

(Alyosha can also place 0, meaning he can open the box for free and see the color of the cube.)

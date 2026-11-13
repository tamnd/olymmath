---
tag: PM42T9CFTV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229482
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have $ 100$ equal cubes. Player $ A$ has to paint the faces of the cubes, each white or black, such that every cube has at least one face of each colour, at least $ 50$ cubes have more than one black face and at least $ 50$ cubes have more than one white face .

Player $ B$ has to place the coloured cubes in a table in a way that their bases form the frame that surrounds a $ 40*12$ rectangle. There are some faces that can not been seen because they are overlapped with other faces or based on the table, we call them invisible faces. On the other hand, the ones which can be seen are called visible faces. Prove that player $ B$ can always place the cubes in such a way that the number of visible faces is the the same as the number of invisible faces, despite the initial colouring of player $ A$

Note: It is easy to see that in the configuration, each cube has three visible faces and three invisible faces

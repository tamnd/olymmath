---
tag: NZ53HSNRJ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h86560
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55854
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2006
    source: hf-ai-mo-aops
    label: 2006 All-Russian Olympiad
---
On a $49\times 69$ rectangle formed by a grid of lattice squares, all $50\cdot 70$ lattice points are colored blue. Two persons play the following game: In each step, a player colors two blue points red, and draws a segment between these two points. (Different segments can intersect in their interior.) Segments are drawn this way until all formerly blue points are colored red. At this moment, the first player directs all segments drawn - i. e., he takes every segment AB, and replaces it either by the vector $\overrightarrow{AB}$ , or by the vector $\overrightarrow{BA}$ . If the first player succeeds to direct all the segments drawn in such a way that the sum of the resulting vectors is $\overrightarrow{0}$ , then he wins; else, the second player wins.
Which player has a winning strategy?

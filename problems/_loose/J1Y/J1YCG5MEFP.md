---
tag: J1YCG5MEFP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1424713
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15831
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217527
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2017
    source: hf-ai-mo-aops
    label: 2017 NIMO Problems
---
Isabella has a sheet of paper in the shape of a right triangle with sides of length 3, 4, and 5. She cuts the paper into two pieces along the altitude to the hypotenuse, and randomly picks one of the two pieces to discard. She then repeats the process with the other piece (since it is also in the shape of a right triangle), cutting it along the altitude to its hypotenuse and randomly discarding one of the two pieces once again, and continues doing this forever. As the number of iterations of this process approaches infinity, the total length of the cuts made in the paper approaches a real number $l$ . Compute $[\mathbb{E}(l)]^2$ , that is, the square of the expected value of $l$ .

*Proposed by Matthew Kroesche*

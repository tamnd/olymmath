---
tag: NS0JF4B9RR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h289408
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3467
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205664
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2009
    source: hf-ai-mo-aops
    label: 2009 Germany Team Selection Test
---
Consider cubes of edge length 5 composed of 125 cubes of edge length 1 where each of the 125 cubes is either coloured black or white. A cube of edge length 5 is called "big", a cube od edge length is called "small". A posititve integer $ n$ is called "representable" if there is a big cube with exactly $ n$ small cubes where each row of five small cubes has an even number of black cubes whose centres lie on a line with distances $ 1,2,3,4$ (zero counts as even number).

(a) What is the smallest and biggest representable number?
(b) Construct 45 representable numbers.

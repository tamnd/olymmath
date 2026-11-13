---
tag: QX9WH0XFZT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h559099
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55662
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249029
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1995
    source: hf-ai-mo-aops
    label: 1995 All-Russian Olympiad
---
Two points on the distance 1 are given in a plane. It is allowed to draw a line through two marked points, as well as a circle centered in a marked point with radius equal to the distance between some two marked points. By marked points we mean the two initial points and intersection points of two lines, two circles, or a line and a circle constructed so far. Let $C(n)$ be the minimum number of circles needed to construct two points on the distance $n$ if only a compass is used, and let $LC(n)$ be the minimum total number of circles and lines needed to do so if a ruler and a compass are used, where $n$ is a natural
number. Prove that the sequence $C(n)/LC(n)$ is not bounded.
*A. Belov*

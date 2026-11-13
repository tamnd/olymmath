---
tag: CFEHT86NSV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h527334
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9274
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2013
    source: hf-ai-mo-aops
    label: 2013 China Team Selection Test
---
There are $n$ balls numbered $1,2,\cdots,n$ , respectively. They are painted with $4$ colours, red, yellow, blue, and green, according to the following rules:
First, randomly line them on a circle.
Then let any three clockwise consecutive balls numbered $i, j, k$ , in order.
1) If $i>j>k$ , then the ball $j$ is painted in red;
2) If $i<j<k$ , then the ball $j$ is painted in yellow;
3) If $i<j, k<j$ , then the ball $j$ is painted in blue;
4) If $i>j, k>j$ , then the ball $j$ is painted in green.
And now each permutation of the balls determine a painting method.
We call two painting methods distinct, if there exists a ball, which is painted with two different colours in that two methods.

Find out the number of all distinct painting methods.

---
tag: 5JX9V4NH8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h2073667
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32869
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2004
    source: hf-ai-mo-aops
    label: 2004 Olympic Revenge
---
For any natural $n$ , $f(n)$ is the number of labeled digraphs with $n$ vertices such that for any vertex the number if in-edges is equal to the number of out-edges and the total of (in+out) edges is even. Let $g(n)$ be the odd-analogous of $f(n)$ . Find $g(n)-f(n)$ with proof .

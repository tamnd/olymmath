---
tag: HCDJ82A0AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h482053
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8404
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2012
    source: hf-ai-mo-aops
    label: 2012 Olympic Revenge
---
Let $a$ and $b$ real numbers. Let $f:[a,b] \rightarrow \mathbb{R}$ a continuous function. We say that f is "smp" if $[a,b]=[c_0,c_1]\cup[c_1,c_2]...\cup[c_{n-1},c_n]$ satisfying $c_0<c_1...<c_n$ and for each $i\in\{0,1,2...n-1\}$ : $c_i<x<c_{i+1} \Rightarrow f(c_i)<f(x)<f(c_{i+1})$ or $c_i>x>c_{i+1} \Rightarrow f(c_i)>f(x)>f(c_{i+1})$ Prove that if $f:[a,b] \rightarrow \mathbb{R}$ is continuous such that for each $v\in\mathbb{R}$ there are only finitely many $x$ satisfying $f(x)=v$ , then $f$ is "smp".

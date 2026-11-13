---
tag: H0QST9TA0R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 France Team Selection Test
    url: https://artofproblemsolving.com/community/c6h149166
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39067
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236399
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/2007
    source: hf-ai-mo-aops
    label: 2007 France Team Selection Test
---
For a positive integer $a$ , $a'$ is the integer obtained by the following method: the decimal writing of $a'$ is the inverse of the decimal writing of $a$ (the decimal writing of $a'$ can begin by zeros, but not the one of $a$ ); for instance if $a=2370$ , $a'=0732$ , that is $732$ .

Let $a_{1}$ be a positive integer, and $(a_{n})_{n \geq 1}$ the sequence defined by $a_{1}$ and the following formula for $n \geq 1$ :
$$a_{n+1}=a_{n}+a'_{n}. $$
Can $a_{7}$ be prime?

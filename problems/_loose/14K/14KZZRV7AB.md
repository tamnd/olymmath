---
tag: 14KZZRV7AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h362400
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5121
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Iran MO (3rd Round)
---
**interesting sequence** $n$ is a natural number and $x_1,x_2,...$ is a sequence of numbers $1$ and $-1$ with these properties:

it is periodic and its least period number is $2^n-1$ . (it means that for every natural number $j$ we have $x_{j+2^n-1}=x_j$ and $2^n-1$ is the least number with this property.)

There exist distinct integers $0\le t_1<t_2<...<t_k<n$ such that for every natural number $j$ we have
$$x_{j+n}=x_{j+t_1}\times x_{j+t_2}\times ... \times x_{j+t_k}$$

Prove that for every natural number $s$ that $s<2^n-1$ we have
$$\sum_{i=1}^{2^n-1}x_ix_{i+s}=-1$$

Time allowed for this question was 1 hours and 15 minutes.

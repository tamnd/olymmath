---
tag: WVJR85CGR1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2212525
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54841
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230285
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2010
    source: hf-ai-mo-aops
    label: 2010 239 Open Mathematical Olympiad
---
We call natural numbers $n$ and $k$ are similar if they are multiples of square of a number greater than $1$ . Let $f(n)$ denote the number of numbers from $1$ to $n$ similar to $n$ (for example, $f(16)=4$ , since the number $16$ is similar to $4$ , $8$ , $12$ and $16$ ). What integer values can the quotient $\frac{n}{f(n)}$ take?

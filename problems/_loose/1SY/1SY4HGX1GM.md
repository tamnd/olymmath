---
tag: 1SY4HGX1GM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3112246
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=630
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2023
    source: hf-ai-mo-aops
    label: 2023 Caucasus Mathematical Olympiad
---
Let $n{}$ and $m$ be positive integers, $n>m>1$ . Let $n{}$ divided by $m$ have partial quotient $q$ and remainder $r$ (so that $n = qm + r$ , where $r\in\{0,1,...,m-1\}$ ). Let $n-1$ divided by $m$ have partial quotient $q^{'}$ and remainder $r^{'}$ .
a) It appears that $q+q^{'} =r +r^{'} = 99$ . Find all possible values of $n{}$ .
b) Prove that if $q+q^{'} =r +r^{'}$ , then $2n$ is a perfect square.

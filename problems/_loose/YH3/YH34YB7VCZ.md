---
tag: YH34YB7VCZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2035522
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36341
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2005
    source: hf-ai-mo-aops
    label: 2005 National High School Mathematics League
---
Define sequence $(a_n)$ : $a_0=1,a_{n+1}=\frac{7a_n+\sqrt{45a_n^2-36}}{2},n\in\mathbb{N}$ .**(a)** Prove that for all $n\in\mathbb{N}$ , $a_n$ is a positive integer.**(b)** Prove that for all $n\in\mathbb{N}$ , $a_na_{n+1}-1$ is a perfect square.

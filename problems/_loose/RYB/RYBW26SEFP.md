---
tag: RYBW26SEFP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1575924
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13200
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2015
    source: hf-ai-mo-aops
    label: 2015 South East Mathematical Olympiad
---
Find all prime number $p$ such that there exists an integer-coefficient polynomial $f(x)=x^{p-1}+a_{p-2}x^{p-2}+…+a_1x+a_0$ that has $p-1$ consecutive positive integer roots and $p^2\mid f(i)f(-i)$ , where $i$ is the imaginary unit.

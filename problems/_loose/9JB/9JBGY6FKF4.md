---
tag: 9JBGY6FKF4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h562506
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10007
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Let $d$ and $n$ be positive integers such that $d$ divides $n$ , $n > 1000$ , and $n$ is not a perfect square. The minimum possible value of $\left\lvert d - \sqrt{n} \right\rvert$ can be written in the form $a\sqrt{b} + c$ , where $b$ is a positive integer not divisible by the square of any prime, and $a$ and $c$ are nonzero integers (not necessarily positive). Compute $a+b+c$ .

*Proposed by Matthew Lerner-Brecher*

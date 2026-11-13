---
tag: 8X7GJBTNQC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2964373
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39368
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236668
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1992
    source: hf-ai-mo-aops
    label: 1992 Bundeswettbewerb Mathematik
---
Below the standard representation of a positive integer $n$ is the representation understood by $n$ in the decimal system, where the first digit is different from $0$ . Everyone positive integer n is now assigned a number $f(n)$ by using the standard representation of $n$ last digit is placed before the first.
Examples: $f(1992) = 2199$ , $f(2000) = 200$ .
Determine the smallest positive integer $n$ for which $f(n) = 2n$ holds.

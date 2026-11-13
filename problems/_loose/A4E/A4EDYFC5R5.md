---
tag: A4EDYFC5R5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 China Second Round
    url: https://artofproblemsolving.com/community/c6h3152921
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35354
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2023
    source: hf-ai-mo-aops
    label: 2023 China Second Round
---
For some positive integer $n$ , $n$ is considered a $\textbf{unique}$ number if for any other positive integer $m\neq n$ , $\{\dfrac{2^n}{n^2}\}\neq\{\dfrac{2^m}{m^2}\}$ holds. Prove that there is an infinite list consisting of composite unique numbers whose elements are pairwise coprime.

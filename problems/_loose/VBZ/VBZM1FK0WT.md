---
tag: VBZM1FK0WT
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=147200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A mysterious machine contains a sequence of 2017 integers, $x_{1}, x_{2}, \ldots, x_{2016}$, where all but one of the numbers are equal. If a sequence of 2017 integers $y_{1}, y_{2}, \ldots, y_{2017}$ is input into the machine, it will output the value $\sum_{i=1}^{2017} x_{i} \cdot y_{i}$. After the first input, a second, third, and so on can be made. Question: In the following scenarios, how many times at least must an input be made to determine the sequence of numbers in the machine? (1) The number in the machine that is different from the others is 0; (2) It is unknown what the number in the machine that is different from the others is.

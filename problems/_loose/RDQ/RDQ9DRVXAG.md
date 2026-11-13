---
tag: RDQ9DRVXAG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2215202
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54945
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2019
    source: hf-ai-mo-aops
    label: 2019 239 Open Mathematical Olympiad
---
The following fractions are written on the board $\frac{1}{n}, \frac{2}{n-1}, \frac{3}{n-2}, \ldots , \frac{n}{1}$ where $n$ is a natural number. Vasya calculated the differences of the neighboring fractions in this row and found among them $10000$ fractions of type $\frac{1}{k}$ (with natural $k$ ). Prove that he can find even $5000$ more of such these differences.

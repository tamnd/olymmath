---
tag: P83WRKCKT5
kind: problem
type: answer
answer: Goran
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Five students Ana, Bojan, Vesna, Goran, and Dejan took a test consisting of five questions. For the first two questions, the possible answers were $\alpha, \beta$, and $\gamma$, while for the last three questions, the possible answers were YES and NO. The students gave the following answers to these five questions:

| | 1 | 2 | 3 | 4 | 5 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| ANA | $\alpha$ | $\alpha$ | YES | YES | YES |
| BOJAN | $\beta$ | $\beta$ | YES | NO | YES |
| VESNA | $\alpha$ | $\beta$ | YES | YES | NO |
| GORAN | $\beta$ | $\gamma$ | YES | YES | NO |
| DEJAN | $\gamma$ | $\alpha$ | NO | YES | YES |

If no two students had the same number of correct answers, determine which student performed the best on the test.

---
tag: 57MZG3CZRV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585516
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11641
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Eighteen students participate in a team selection test with three problems, each worth up to seven points. All scores are nonnegative integers. After the competition, the results are posted by Evan in a table with 3 columns: the student's name, score, and rank (allowing ties), respectively. Here, a student's rank is one greater than the number of students with strictly higher scores (for example, if seven students score $0, 0, 7, 8, 8, 14, 21$ then their ranks would be $6, 6, 5, 3, 3, 2, 1$ respectively).

When Richard comes by to read the results, he accidentally reads the rank column as the score column and vice versa. Coincidentally, the results still made sense! If the scores of the students were $x_1 \le x_2 \le \dots \le x_{18}$ , determine the number of possible values of the $18$ -tuple $(x_1, x_2, \dots, x_{18})$ . In other words, determine the number of possible multisets (sets with repetition) of scores.

*Proposed by Yang Liu*

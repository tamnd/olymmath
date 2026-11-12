---
tag: 7E6G0Q1DJX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3585207
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2662
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2025
    source: hf-ai-mo-aops
    label: 2025 India IMOTC
---
In a job interview, the candidates are asked questions in a sequence. The initial score is $0$ . The candidate's score is calculated as follows: $\bullet$ after a correct answer, the score is increased by $1$ ; $\bullet$ after a wrong answer, the score is divided by $2$ .

If the candidate is asked $n$ questions and answers all of them, how many different scores are possible?**Note:** Two different response sequences of the same length can result in the same score: the sequences $RRW$ and $WWR$ with the same length, where $R$ denotes the correct answer and $W$ denotes the wrong answer, both result in the same score of 1.

*Proposed by S. Muralidharan*

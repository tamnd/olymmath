---
tag: YN9PE153FY
kind: problem
appearances:
  - at: pumac/2012/ca7
    primary: true
  - at: pumac/2012/cb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927387
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8566
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A PUMaC grader is grading the submissions of forty students $s_1, s_2, ..., s_{40}$ for the individual finals round, which has three problems. After grading a problem of student $s_i$ , the grader either: $\bullet$ grades another problem of the same student, or $\bullet$ grades the same problem of the student $s_{i-1}$ or $s_{i+1}$ (if $i > 1$ and $i < 40$ , respectively).
He grades each problem exactly once, starting with the first problem of $s_1$ and ending with the third problem of $s_{40}$ . Let $N$ be the number of different orders the grader may grade the students' problems in this way. Find the remainder when $N$ is divided by $100$ .

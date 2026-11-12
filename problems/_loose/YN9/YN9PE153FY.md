---
tag: YN9PE153FY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
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
unplaced:
  - at: pumac/2012
    source: hf-ai-mo-aops
    label: 2012 Princeton University Math Competition
---
A PUMaC grader is grading the submissions of forty students $s_1, s_2, ..., s_{40}$ for the individual finals round, which has three problems. After grading a problem of student $s_i$ , the grader either: $\bullet$ grades another problem of the same student, or $\bullet$ grades the same problem of the student $s_{i-1}$ or $s_{i+1}$ (if $i > 1$ and $i < 40$ , respectively).
He grades each problem exactly once, starting with the first problem of $s_1$ and ending with the third problem of $s_{40}$ . Let $N$ be the number of different orders the grader may grade the students' problems in this way. Find the remainder when $N$ is divided by $100$ .

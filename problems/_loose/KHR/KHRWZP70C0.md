---
tag: KHRWZP70C0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h3686279
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Belarusian National Olympiad
---
$n$ ( $n \ge 3$ ) integers are written on a blackboard. Every second, the set of written numbers is replaced with a new set of $n$ numbers according to the following rule. First, the arithmetic mean $s$ of all the written numbers is calculated. After that, some (possibly all, or possibly none) of the numbers greater than $s + 1$ are decrease by one, and some (possibly all, possibly none) of the numbers less than $s-1$ increase by one. The remaining numbers remain unchanged. In this case, all the numbers are replaced simultaneously, and at least one of the numbers that differs from $s$ by more than $1$ must change. Prove that after some time, the numbers on the board will not change.

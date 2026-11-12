---
tag: DN9PAKCGEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585512
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11637
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
Joe the teacher is bad at rounding. Because of this, he has come up with his own way to round grades, where a *grade* is a nonnegative decimal number with finitely many digits after the decimal point.

Given a grade with digits $a_1a_2 \dots a_m.b_1b_2 \dots b_n$ , Joe first rounds the number to the nearest $10^{-n+1}$ th place. He then repeats the procedure on the new number, rounding to the nearest $10^{-n+2}$ th, then rounding the result to the nearest $10^{-n+3}$ th, and so on, until he obtains an integer. For example, he rounds the number $2014.456$ via $2014.456 \to 2014.46 \to 2014.5 \to 2015$ .

There exists a rational number $M$ such that a grade $x$ gets rounded to at least $90$ if and only if $x \ge M$ . If $M = \tfrac pq$ for relatively prime integers $p$ and $q$ , compute $p+q$ .

*Proposed by Yang Liu*

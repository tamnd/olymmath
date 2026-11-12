---
tag: JF6SMP9QJT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h522308
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
While taking the SAT, you become distracted by your own answer sheet. Because you are not bound to the College Board's limiting rules, you realize that there are actually $32$ ways to mark your answer for each question, because you could fight the system and bubble in multiple letters at once: for example, you could mark $AB$ , or $AC$ , or $ABD$ , or even $ABCDE$ , or nothing at all!

You begin to wonder how many ways you could mark off the 10 questions you haven't yet answered. To increase the challenge, you wonder how many ways you could mark off the rest of your answer sheet without ever marking the same letter twice in a row. (For example, if $ABD$ is marked for one question, $AC$ cannot be marked for the next one because $A$ would be marked twice in a row.) If the number of ways to do this can be expressed in the form $2^m p^n$ , where $m,n > 1$ are integers and $p$ is a prime, compute $100m+n+p$ .

*Proposed by Alexander Dai*

---
tag: MJW0M9W0D7
kind: problem
type: answer
answer: 'a: Yes; b: Yes'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
The teacher writes the digits $20212022$ in a row on a blackboard. Juku must write each arithmetic operator $(+, -, \cdot, :)$ exactly once somewhere between these digits in such a way that the result is a correct mathematical expression with a real value, and find this value.

a. Can Juku obtain the number $0$ as the value of the expression?

b. If the teacher allowed Juku to use parentheses, could Juku obtain expressions with larger values than it would be possible without parentheses?

c. Prove that there exists a positive integer less than $1000$ that cannot be obtained (without using parentheses) as the value of the expression.

---
tag: YE5NR6D7KQ
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Twenty students participating in a math camp have decided to send messages to each other, with each of them sending messages to exactly ten of the remaining students. Determine the minimum possible number of mutual messages, i.e., find an example of a message-sending schedule in which the number of mutual messages is the smallest possible and prove that a smaller number of mutual messages cannot be achieved.

(A message between students $\mathrm{A}$ and $\mathrm{B}$ is considered mutual if student $\mathrm{A}$ has sent a message to student B and student B has sent a message to student A.)

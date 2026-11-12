---
tag: 1TTW40Q5NC
kind: problem
type: answer
answer: n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A journalist has come to a company of $n$ people. He knows that in this company there is a person $Z$ who knows all the other members of the company, but no one knows him. The journalist can ask each member of the company the question: "Do you know such-and-such?"

a) Can the journalist determine who in the company is $Z$ by asking fewer than $n$ questions?

b) Find the smallest number of questions sufficient to definitely find $Z$, and prove that it is impossible to do so with fewer questions.

(Everyone answers the questions truthfully. One person can be asked several questions.)

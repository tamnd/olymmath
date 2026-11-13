---
tag: Y2BXSG2KKD
kind: problem
type: answer
answer: "429"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268632
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Adam and Bettie are playing a game. They take turns generating a random number between $0$ and $127$ inclusive. The numbers they generate are scored as follows:
$\bullet$ If the number is zero, it receives no points.
$\bullet$ If the number is odd, it receives one more point than the number one less than it.
$\bullet$ If the number is even, it receives the same score as the number with half its value.
if Adam and Bettie both generate one number, the probability that they receive the same score is $\frac{p}{q}$ for relatively prime positive integers $p$ and $q$. Find $p$.

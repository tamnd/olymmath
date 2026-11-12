---
tag: AP9HG22DB9
kind: problem
type: answer
answer: \frac{\sqrt[3]{4}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1982
    source: hf-numinamath-1-5
    label: XXXIII OM - I - Problem 9
---
In a chessboard created by dividing a square of side length $ n $ into unit squares using lines parallel to the sides of the square, we consider all squares whose sides are contained in the lines forming the chessboard. Let $ 1 \leq k \leq n $ and $ P(k,n) $ denote the number of these squares whose side lengths do not exceed $ k $. Let $ k(n) $ be the largest of such numbers $ k $ for which $ P(k, n) \leq \frac{1}{2} P(n, n) $. Calculate $ \lim_{n\to \infty} \frac{k(n)}{n} $.

---
tag: A6E72ZMSQF
kind: problem
type: answer
answer: "55"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=202435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three balls are randomly and independantly tossed into bins numbered with the positive integers so that for each ball, the probability that it is tossed into bin $i$ is $2^{-i}$ for $i=1,2,3,....$ More than one ball is allowed in each bin. The probability that the balls end up evenly spaced in distinct bins is $\frac pq,$ where $p$ and $q$ are relatively prime positive integers. (For example, the balls are evenly spaced if they are tossed into bins $3,17,$ and $10.$) What is $p+q?$
$\textbf{(A) }55 \textbf{(B) }56 \textbf{(C) }57 \textbf{(D) }58 \textbf{(E) }59$

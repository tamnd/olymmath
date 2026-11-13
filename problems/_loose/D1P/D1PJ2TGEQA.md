---
tag: D1PJ2TGEQA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h570964
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65599
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
A person starting with $64$ cents and making $6$ bets, wins three times and loses three times, the wins and losses occurring in random order. The chance for a win is equal to the chance for a loss. If each wager is for half the money remaining at the time of the bet, then the final result is: $\textbf{(A)}\ \text{a loss of } 27 \textbf{(B)}\ \text{a gain of }27 \textbf{(C)}\ \text{a loss of }37 $ $
\textbf{(D)}\ \text{neither a gain nor a loss} \textbf{(E)}\ \text{a gain or a loss depending upon the order in which the wins and losses occur}$ Note: Due to the lack of $\LaTeX$ packages, the numbers in the answer choices are in cents ¢

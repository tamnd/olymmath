---
tag: C7XQQ123XX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3598807
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2024
    source: hf-ai-mo-aops
    label: 2024 JBMO Shortlist
---
Anna and Bob are constructing quadratic polynomials $f_A$ and $f_B$ as follows: With Anna starting first, they take alternate turns in choosing one by one the coefficients of the polynomials, with Anna choosing the coefficients of $f_A$ , and Bob the coefficients of $f_B$ . In their turn, each player can choose whichever coefficient of their polynomial is not yet chosen, with the only restriction being that the coefficients have to be positive real numbers.
Bob wins if any of the following two cases occurs:
\begin{align*}
\text{(a)}&\text{ The roots of }{f_A(x)}\text{ are not real.}
\text{(b)}&\text{ The roots of both polynomials are real numbers and furthermore each root of } f_B(x) \text{ is strictly}
&\text{larger than each root of } f_A(x) \text{.}
\end{align*}
Otherwise Anna wins. Determine which player has a winning strategy.

---
tag: JTRHPRY5XX
kind: problem
appearances:
  - at: pumac/2019/ca1
    primary: true
  - at: pumac/2019/cb3
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Prinstan Trollner and Dukejukem are competing at the game show WASS. Both players spin a wheel which chooses an integer from $1$ to $50$ uniformly at random, and this number becomes their score. Dukejukem then flips a weighted coin that lands heads with probability $3/5$. If he flips heads, he adds $1$ to his score. A player wins the game if their score is higher than the other player's score. The probability Dukejukem defeats the Trollner to win WASS equals $m/n$ where $m,n$ are coprime positive integers. Compute $m+n$.

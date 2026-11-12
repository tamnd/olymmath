---
tag: 7BA57VNPE8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927103
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2008
    source: hf-ai-mo-aops
    label: 2008 Princeton University Math Competition
---
Alex Lishkov is trying to guess sequence of $2009$ random ternary digits ( $0, 1$ , or $2$ ). After he guesses each digit, he finds out whether he was right or not. If he guesses incorrectly, and $k$ was the correct answer, then an oracle tells him what the next $k$ digits will be. Being Bulgarian, Lishkov plays to maximize the expected number of digits guessed correctly. Let $P_n$ be the probability that Lishkov guesses the nth digit correctly. Find $P_{2009}$ . Write your answer in the form $x + yRe(\rho^k)$ , where $x$ and $y$ are rational, $\rho$ is complex, and $k$ is a positive integer

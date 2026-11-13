---
tag: DRMJWQ1TNW
kind: problem
appearances:
  - at: smt/2018/tp2
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: stanford-smt
    name: Stanford Math Tournament 2018 official paper
    url: https://www.stanfordmathtournament.org/pdfs/smt2018/team-problems.pdf
    page: 3
    origin: H1
    zone: Z2
    kind: official
    extraction: vision/codex@0.167.0 (gpt-6-sol)
    confidence: 0.9
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2766614
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74014
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a game played on the integers in the closed interval $[1,n]$. The game begins with some tokens placed in $[1,n]$. At each turn, tokens are added or removed from $[1,n]$ using the following rule: For each integer $k\in[1,n]$, if exactly one of $k-1$ and $k+1$ has a token, place a token at $k$ for the next turn, otherwise leave $k$ blank for the next turn.

We call a position static if no changes to the interval occur after one turn. For instance, the trivial position with no tokens is static because no tokens are added or removed after a turn (because there are no tokens). Find all non-trivial static positions.

<!-- S2 -->
Consider a game played on the integers in the closed interval $[1, n]$ . The game begins with some tokens placed in $[1, n]$ . At each turn, tokens are added or removed from $ [1, n]$ using the following rule: For each integer $k \in [1, n]$ , if exactly one of $k - 1$ and $k + 1$ has a token, place a token at $k$ for the next turn, otherwise leave k blank for the next turn.
We call a position *static* if no changes to the interval occur after one turn. For instance, the trivial position with no tokens is static because no tokens are added or removed after a turn (because there are no tokens). Find all non-trivial static positions.

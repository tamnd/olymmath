---
tag: TGCZ4A7TCJ
kind: problem
appearances:
  - at: pumac/2021/ca3
    primary: true
  - at: pumac/2021/cb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825832
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Nelson is having his friend drop his unique bouncy ball from a $12$ foot building, and Nelson will only catch the ball at the peak of its trajectory between bounces. On any given bounce, there is an $80\%$ chance that the next peak occurs at $\frac13$ the height of the previous peak and a $20\%$ chance that the next peak occurs at $3$ times the height of the previous peak (where the first peak is at $12$ feet). If Nelson can only reach $4$ feet into the air and will catch the ball as soon as possible, the probability that Nelson catches the ball after exactly $13$ bounces is $2^a \times 3^b \times 5^c \times 7^d \times 11^e$ for integers $a, b, c, d$ , and $e$ . Find $|a| + |b| + |c| + |d| + |e|$ .

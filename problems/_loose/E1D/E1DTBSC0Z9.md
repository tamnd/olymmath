---
tag: E1DTBSC0Z9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1673746
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32887
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2015
    source: hf-ai-mo-aops
    label: 2015 Olympic Revenge
---
Consider a game in the integer points of the real line, where an Angel tries to escape from a Devil. A positive integer $k$ is chosen, and the Angel and the Devil take turns playing. Initially, no point is blocked. The Angel, in point $A$ , can move to any point $P$ such that $|AP| \le k$ , as long as $P$ is not blocked. The Devil may block an arbitrary point. The Angel loses if it cannot move and wins if it does not lose in finitely many turns. Let $f(k)$ denote the least number of rounds the Devil takes to win. Prove that $$ 0.5 k \log_2 (k) (1 + o(1)) \le f(k) \le k \log_2(k) (1 +o(1)). $$ Note: $a(x) = b(x) (1+o(1))$ if $\lim_{x \to \infty} \frac{b(x)}{a(x)} = 1$ .

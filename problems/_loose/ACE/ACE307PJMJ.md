---
tag: ACE307PJMJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262882
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any nonnegative integer $r$, let $S_r$ be a function whose domain is the natural numbers that satisfies
$$S_r(p^{\alpha}) = \begin{cases} 0\, if \, if \, p \le r \\ p^{{\alpha}-1}(p -r) \, if \, p > r \end{cases}$$

for all primes $p$ and positive integers ${\alpha}$, and that $S_r(ab) = S_r(a)Sr_(b)$ whenever $a$ and $b$ are relatively prime.
Now, suppose there are $n$ squirrels at a party. Each squirrel is labeled with a unique number from the set $\{1, 2,..., n\}$. Two squirrels are friends with each other if and only if the difference between their labels is relatively prime to $n$. For example, if $n = 10$, then the squirrels with labels $3$ and $10$ are friends with each other because $10 - 3 = 7$, and $7$ is relatively prime to $10$.
Fix a positive integer $m$. Define a clique of size $m$ to be any set of m squirrels at the party with the property that any two squirrels in the clique are friends with each other. Determine, with proof, a formula (using $S_r$) for the number of cliques of size $m$ at the squirrel party.

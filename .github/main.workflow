workflow "New workflow" {
  on = "push"
  resolves = ["Coverage Report"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "yarn"
}

action "Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  runs = "yarn test"
}

action "Coverage Report" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Test"]
  runs = "yarn coverage"
  secrets = ["COVERALLS_REPO_TOKEN"]
}

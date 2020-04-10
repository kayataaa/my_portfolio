class PagesController < ApplicationController
  extend LoadArticles
  def index

  end

  def about
    render "about"
  end

  def works
    render "works"
  end

  def skills
    render "skills"
  end
end

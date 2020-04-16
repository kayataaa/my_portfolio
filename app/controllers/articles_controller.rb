class ArticlesController < ApplicationController
  def create
    @article = Article.new article_params
    if @article.save
      render :create, notice: 'article was created'

      binding.pry

    else
      render :create, notice: "article wasn't created"

      binding.pry

    end
  end

  def delete
    if @article.delete params[:id]
      render :delete, notice: 'article was created'
    else
      render :delete, notice: 'article was created'
    end
  end

private
  def article_params
    params.permit(:description, :sub_description, :tag_name, :created_at, :updated_at)
  end
end

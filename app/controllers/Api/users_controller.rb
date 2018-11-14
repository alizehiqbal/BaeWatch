class Api::UsersController < ApplicationController

    def create
      @user = User.new(user_params)

      if @user.save
        login(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = User.find_by(id: params[:id])
      render :show
    end

    def index
      @users = User.all
      @users
      render :index
    end

    private

    def user_params
      params.require(:user).permit(:username, :password, :city, :description, :curr_lang, :seeking_lang, :fav_br_quote, :toughest_bug, :what_im_building, :dream_project, :talk_syntax_to_me)
    end
end

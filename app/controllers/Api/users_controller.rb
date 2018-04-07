class Api::UsersController < ApplicationController

    def create
      @user = User.new(user_params)

      if @user.save
        login(@user)
        render :show
      else
        rener json: @user.errors.full_messages, status: 401
      end
    end

    def show
      @user = User.find_by(id: params[:id])
      render :show 
    end

    private

    def user_params
      params.require(:user).permit(:username, :password)
    end
end

class PageController < ApplicationController

  def portfolio
    render component: 'Portfolio', props: { sesa: view_context.image_path("sesa_home.jpg"),
                                            compass: view_context.image_path("compass_home.jpg"),
                                            makerepo: view_context.image_path("makerepo_home.jpg"),
                                            yusso: view_context.image_path("yusso_home.jpg") }
  end

  def contact
    ContactMailer.contact_message(params[:message]).deliver
    render nothing: true
  end
  
end
